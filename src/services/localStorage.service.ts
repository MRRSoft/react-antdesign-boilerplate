import { IUser } from "interfaces/IUser";
import { parseJwt } from "utils";

const testUser = {
  id: 1,
  firstName: "Christopher",
  lastName: "Johnson",
  imgUrl: "test.png",
  userName: "@john1989",
  email: {
    name: "christopher.johnson@altence.com",
    verified: true,
  },
  phone: {
    number: "+18143519459",
    verified: true,
  },
  sex: "male",
  birthday: "01/26/2022",
  lang: "en",
  country: "GB",
  city: "London",
  address1: "14 London Road",
  zipcode: 5211,
  website: "altence.com",
  socials: {
    twitter: "@altence_team",
    facebook: "https://facebook.com/groups/1076577369582221",
    linkedin: "https://linkedin.com/company/altence",
  },
};

export const persistToken = (token: string, refresh_token:string): void => {
  localStorage.setItem("accessToken", token);
  localStorage.setItem("refresh_token", refresh_token);
  localStorage.setItem("account_info",JSON.stringify(parseJwt(token)))
  
};



export const readToken = (): string => {
  return localStorage.getItem("accessToken") || "";
};

export const persistUser = (user: IUser): void => {
  //localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("user", "");
};

export const readUser = (): IUser | null => {
  const userStr = localStorage.getItem("user");

  return userStr ? JSON.parse(userStr) : testUser;
};

export const deleteToken = (): void => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("account_info");

}
 
export const getAccountInfo = (): { ClientID: string, AccountID: string } => { 
  const accountInfo = localStorage.getItem("account_info")

  return accountInfo ? JSON.parse(accountInfo) as any : null
}

export const getClient = (): string | null => { 
  const accountInfo = localStorage.getItem("account_info")
  if (accountInfo) { 
    let parsedAccountDetails = JSON.parse(accountInfo)
    return parsedAccountDetails.ClientID ? parsedAccountDetails.ClientID : null
  }
  return  null
}

export const isAccount = ():boolean => { 
  const accountInfo = localStorage.getItem("account_info");
 const parsedAccountInfo=  accountInfo ? JSON.parse(accountInfo) as any : null

  return parsedAccountInfo ? parsedAccountInfo.AccountID ?true:false : false
}




export const deleteUser = (): void => localStorage.removeItem("user");
