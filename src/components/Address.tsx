function Address(props: any) {
  return (
    <address className="not-italic text-gray-800 flex">
      <span className="city text-xl text-black-primary">Jeddah</span>
      <span className="country h-max bg-tag text-white text-xs leading-none px-2.5 py-0.5 ml-1 rounded-full ">
        SA
      </span>
    </address>
  );
}

export default Address;
