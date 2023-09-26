import { myAxios } from "./helper";



export const signUp=async (user)=>{

    const response = await myAxios
        .post("api/auth/signup");
    return response.data;
};

