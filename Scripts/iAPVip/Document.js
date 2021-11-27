// var obj = {
//   originalTransactionId: "20000625420102",
//   subscriptionState: "trial",
//   isInGracePeriod: false,
//   subscriptionExpirationDate: "17:48 25/11/2099",
//   isDocuments6User: true,
//   isEligibleForIntroPeriod: false,
//   subscriptionAutoRenewStatus: "autoRenewOff",
//   subscriptionReceiptId: "1530908572000",
// };

var obj = {
  inAppStates: [
    {
      originalTransactionId: "20000625420102",

      subscriptionState: "trial",
      isInGracePeriod: false,
      subscriptionExpirationDate: "17:48 25/11/2099",
      isDocuments6User: true,
      isEligibleForIntroPeriod: false,
      subscriptionAutoRenewStatus: "autoRenewOff",

      entitlements: [],
      type: "custom purchase",
      productId: "documents6-user",
    },
  ],
  statisticsInfo: {
    events: [],
  },
  receiptId: 1530908572000,
  receiptStatus: "OK",
  bundleId: "com.readdle.ReaddleDocsIPad",
  chargingPlatform: "iOS AppStore",
};

$done({ body: JSON.stringify(obj) });
