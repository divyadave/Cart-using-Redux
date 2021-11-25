import MainHeader from "./MainHeader";

const Layout = (props) => {
    return (
    <>
    <MainHeader></MainHeader>
    <main>{props.children}</main>
    </>
    );


}
export default Layout;