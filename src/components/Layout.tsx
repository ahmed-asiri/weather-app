function Layout(props: any) {
  return (
    <div className="flex flex-col md:flex-row relative drop-shadow-lg max-w-3xl m-auto bg-transparent justify-center items-center md:items-stretch px-4">
      {props.children}
    </div>
  );
}

export default Layout;
