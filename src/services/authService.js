const login = async ({ username, password }) => {

    const response = await fetch(
         "https://dummyjson.com/auth/login",{
            method:'POST',
            headers:{'Content-Type':'application/json',},
            body:JSON.stringify({
                username,
                password,
                expiresInMins:60,
            }),
            credentials:"include"
         }
    )

    const data = await response.json();

    if(!response.ok){
       console.log(data)
    }

   
    return data;
}



export { login };