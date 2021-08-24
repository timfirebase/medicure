import React from "react"
import SignUp from "./SignUp";
import Layout from "./UI/Layout";

function App() {
  return (
      <>
          <Layout>
              <div style={{marginRight: "5%"}}>
                  <SignUp/>
              </div>
          </Layout>
      </>
  )
}
export default App;
