
import a from "./AppPaths";


export default{
  appUrl: "http://localhost:3000",
  appLogo: "",
  appFullLogo: "",
  appName: "Super Admin System",
  appKey: "",
  apiUrl: "",
  appCaptchaId: "",
  adminUrl: a.DASHBOARD,
  authUrl: a.LOGIN,
  appTheme: "",
  appLang: {
    key: "en",
    locale: "en",
    configLocale: "",
    captchaLang: "eng",
    supportedLang: "",
  },
  appPaginate: {
    page: 1,
    pageSize: 10,
    sortBy: "id",
    sortDirection: "desc",
    pageSizeOptions: [10, 20, 50, 100],
  },
  appBasename: "/",
  appDateFormat: "DD-MM-YYYY",
  appDateTimeFormat: "DD-MM-YYYY HH:mm:ss",
  appMonthFormat: "YYYY MMM",
  appIdleTimeout: 20,
};

