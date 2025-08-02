export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list ✈️</em>
      </p>
    );

  const itemsNum = items.length;
  const itemsPackedNum = items.filter((item) => item.packed).length;
  const Percentage = Math.round((itemsPackedNum / itemsNum) * 100);
  return (
    <footer className="stats">
      <em>
        {Percentage === 100
          ? "You got everything ! you are ready to go ✈︎"
          : `You have ${itemsNum} items on your list, and
        you already packed ${itemsPackedNum} (${Percentage}%)`}
      </em>
    </footer>
  );
}
