import React from "react"
import Sidebar from "./Sidebar"
import TopBar from "./TopBar"

const Layout = ({ children }) => {
  return (
    <>
      <TopBar />
      <Sidebar />
      <div className="container">{children}</div>
    </>
  )
}

export default Layout
