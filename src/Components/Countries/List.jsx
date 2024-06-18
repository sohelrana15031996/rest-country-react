
const List = (getList) => {
  return (
    <div>
      <ol>
        <li>
          {getList}
        </li>
      </ol>
    </div>
  );
};

export default List;