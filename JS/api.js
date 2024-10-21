//const axios = require('axios');
//import axios from '../node_modules/axios'
const AK = "SPLxQJJbapePyk4tYLamCoLo"
const SK = "piIk6nvX82pWfGJI5VumcyaLH48XjTfp"

async function getResponse(text, result) {
  var options = {
    'method': 'POST',
    // 使用免费的Yi-34B-Chat大语言模型
    'url': 'https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/yi_34b_chat?access_token=' + await getAccessToken(),
    'headers': {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify({
      "messages": [
        {
          "role": "user",
          "content": text
        },
      ]
    })

  };

  axios(options)
    .then(response => {
      console.log(response.data.result);
      result = response.data.result;
    })
    .catch(error => {
      throw new Error(error);
    })

  //   try {
  //     const response = await axios(options);
  //     console.log(response);
  //     return response.data.result;
  //   } catch (error) {
  //     throw new Error(error);
  //   }
}

/**
 * 使用 AK，SK 生成鉴权签名（Access Token）
 * @return string 鉴权签名信息（Access Token）
 */
function getAccessToken() {

  let options = {
    'method': 'POST',
    'url': 'https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=' + AK + '&client_secret=' + SK,
  }
  return new Promise((resolve, reject) => {
    axios(options)
      .then(res => {
        resolve(res.data.access_token)
      })
      .catch(error => {
        reject(error)
      })
  })
}
export default getResponse;
//module.exports = { getResponse: getResponse };
