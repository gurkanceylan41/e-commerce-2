const Sorting = ({ setSort }) => {
  return (
    <div className="bg-gray-100 my-5 p-5 flex items-center justify-end">
      <select
        onChange={(e) => setSort(e.target.value)}
        name=""
        id=""
        className="text-sm text-gray-700 border outline-none border-gray-300 rounded-md p-2"
      >
        <option disabled value="">
          SEÇİNİZ
        </option>
        <option value="inc">Artan</option>
        <option value="dec">Azalan</option>
      </select>
    </div>
  );
};

export default Sorting;
