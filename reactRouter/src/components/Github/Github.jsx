import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const [data, setData] = useState([]);
  const followers = useLoaderData();
//   const [followers, setFollowers] = useState([]);

//   const githubFollowers = async () => {
//     const response = await fetch(
//       "https://api.github.com/users/aialok/followers"
//     );

//     const responseData = await response.json();

//     setFollowers(responseData);
//   };


  const githubProfile = async () => {
    const response = await fetch("https://api.github.com/users/aialok");
    const responseJson = await response.json();

    setData(responseJson);
  };

  useEffect(() => {
    githubProfile();
    githubFollowers();
  }, []);

  return (
    <>
      <div className=" m-4 bg  -gray-600 text flex items-center justify-around gap-10">
        <div>
          <img
            src={data.avatar_url}
            alt="aialok"
            className="rounded-[50%] w-96"
          />
        </div>
        <div>
          <h1 className="text-2xl font-semibold">Username : {data.login}</h1>
          <h1 className="text-2xl font-semibold">Name : {data.name}</h1>
          <h1 className="text-2xl font-semibold">Bio : {data.bio}</h1>
          <h1 className="text-2xl font-semibold">Location : {data.location}</h1>
          <h1 className="text-2xl font-semibold">
            Followers : {data.followers}
          </h1>
          {followers.map((follower)=>(
            <h1 className="text-center" key={follower.login}>{follower.login}</h1>
        ))}
        </div>
      </div>
    </>
  );
}

export default Github;

 export const githubFollowers = async () => {
    const response = await fetch(
      "https://api.github.com/users/aialok/followers"
    );
        
    const responseData = await response.json();

    return responseData;

  };


