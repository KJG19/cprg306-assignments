export default function Item({ item }) {
  let { name, quantity, category } = item;

  return (
    <div className="m-4 bg-slate-900 p-2 max-w-sm my-5">
      <ul>
        <li>
          <h2 className=" text-xl font-bold text-white"> {name} </h2>
        </li>
        <li>
          <p className="text-white">
            Buy {quantity} in {category}{" "}
          </p>
        </li>
      </ul>
    </div>
  );
}
