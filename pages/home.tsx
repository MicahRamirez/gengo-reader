import React, { useContext } from "react";
import { Layout } from "../src/Layout";
import { AuthContext } from "../src/AuthContext";

const ViewType: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useContext(AuthContext);
  console.log(user);
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
        <StudentView />
        <TeacherView />
      </ViewType>
    </Layout>
  );
};

export default Home;
