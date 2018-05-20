import request from "request-promise-native";

const sendsms = async () => {
  const response = await request({
    uri:
      "https://tango.developersteve.com/redir.php?url=https://tapi.telstra.com/v2/oauth/token",
    form: {
      client_id: "LjX80rZK5EUBAKWC1MgOxhuTfp0cxqRm",
      client_secret: "oYQtTr446AmO9I7k",
      grant_type: "client_credentials"
    },
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    method: "post"
  });
  const jsonResponse = JSON.parse(response);
  console.log(jsonResponse.access_token);

  await request({
    uri:
      "https://tango.developersteve.com/redir.php?url=https://tapi.telstra.com/v2/messages/sms",
    body: {
      to: "+61478124225",
      validity: "60",
      priority: false,
      body: "hey from telstra",
      replyRequest: true
    },
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${jsonResponse.access_token}`,
      Origin: "https://tango.developersteve.com/redir.php?url="
    },
    json: true
  });

  while (true) {
    console.log("waiting...");
    setTimeout(() => {}, 1000);
    const answer = await request({
      uri: `https://tango.developersteve.com/redir.php?url=https://tapi.telstra.com/v2/messages/sms`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${jsonResponse.access_token}`
      },
      method: "get"
    });
    if (answer.message) {
      return answer.message;
    }
  }
};

export default {
  sendsms
};
