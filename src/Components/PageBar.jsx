export default function pageBar(scrollState) {
  return (
    <footer className="footer">
      <div className="footer-p">
        <span
          className={
            scrollState === 0 ? "horizontal-line-scope" : "horizontal-line"
          }
        >
          __
        </span>
        <span
          className={
            scrollState === -1 ? "horizontal-line-scope" : "horizontal-line"
          }
        >
          __
        </span>
        <span
          className={
            scrollState === -2 ? "horizontal-line-scope" : "horizontal-line"
          }
        >
          __
        </span>
        <span
          className={
            scrollState === -3 ? "horizontal-line-scope" : "horizontal-line"
          }
        >
          __
        </span>
      </div>
    </footer>
  );
}
