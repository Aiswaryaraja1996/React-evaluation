export default function Pagination({ total, currPage, onPageChange }) {
  const Pages = new Array(total).fill(0);
  return (
    <div
      style={{
        display: "flex",
        marginTop: "10px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {Pages.map((val, index) =>
        currPage === index + 1 ? (
          <button
            style={{
              textDecoration: "none",
              outline: "none",
              borderStyle: "none",
              cursor: "pointer",
            }}
            disabled
            onClick={() => onPageChange(index + 1)}
          >
            {index + 1}
          </button>
        ) : (
          <button
            style={{
              textDecoration: "none",
              outline: "none",
              borderStyle: "none",
              cursor: "pointer",
            }}
            onClick={() => onPageChange(index + 1)}
          >
            {index + 1}
          </button>
        )
      )}
    </div>
  );
}
