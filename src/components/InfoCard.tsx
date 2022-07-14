function InfoCard(props: any) {
  return (
    <div className="w-full xs:w-10/12 sm:w-2/3 w- md:w-1/2 p-4 bg-white md:rounded-bl-none rounded-b-xl md:rounded-tr-xl  relative md:-left-2">
      <address className="not-italic text-gray-800 flex">
        <span className="city text-xl text-black-primary">Jeddah</span>
        <span className="country h-max bg-tag text-white text-xs px-2.5 ml-1 rounded-full ">
          SA
        </span>
      </address>
      <p className="text-black-primary text-xs">Saturday 9 Jul, 2022</p>
    </div>
  );
}

export default InfoCard;
