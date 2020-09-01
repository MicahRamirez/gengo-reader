import React, { useContext } from "react";
import { Layout } from "../src/Layout";
import { AuthContext } from "../pages/_app";

const ViewType: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const test = useContext(AuthContext);
  console.log(test);
  console.log(children[0]("test"));
  return (
    <>
      {typeof children === "function" ? (
        children({ test: "test" })
      ) : (
        <p>failed</p>
      )}
    </>
  );
};

const StudentView = () => {
  return (
    <div>
      <p>STUDENT VIEW</p>
    </div>
  );
};

const TeacherView = () => {
  return (
    <div>
      <p>Teacher View</p>
    </div>
  );
};

const Home = () => {
  return (
    <Layout>
      <ViewType>
        {(props: any) => {
          console.log(props);
        }}{" "}
      </ViewType>
    </Layout>
  );
};

export default Home;
