import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="m-4">
      <h1 className="p-2 font-bold text-3xl">Ooops......</h1>
      <p className="p-2 font-bold text-lg pl-4">Something went wrong!!!</p>
      <h3 className="font-bold p-2 pl-8">
        {err.status}:{err.statusText}
      </h3>
    </div>
  );
};

export default Error;
