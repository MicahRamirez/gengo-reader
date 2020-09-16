import React, { useContext } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import { Layout } from "../src/Layout";
import { AuthContext } from "../src/AuthContext";
import { SetUserTypeFlow } from "./SetUserTypeFlow";
import { Account } from "../clientTypes";

const ViewType: React.FC<{
  children: (user: { user: Omit<Account, "_ts"> }) => React.ReactNode;
}> = ({ children }) => {
  const { user, loadingUser } = useContext(AuthContext);
  if (loadingUser) {
    return <CircularProgress />;
  } else if (user && !user.student && !user.teacher) {
    return <SetUserTypeFlow userId={user._id} />;
  } else if (user) {
    return (
      <>{typeof children === "function" ? children({ user }) : <p>failed</p>}</>
    );
  }
  return null;
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

export const AuthenticatedIndex = () => {
  return (
    <Layout>
      <ViewType>
        {({ user }) => {
          return (
            <div>
              {user.student && <StudentView />}
              {user.teacher && <TeacherView />}
            </div>
          );
        }}
      </ViewType>
    </Layout>
  );
};
