export default function pageBar(scrollState) {
  return (
    <footer className="footer">
      <p className="footer-p">
        <span
          className={
            scrollState === 0 ? "horizontal-line-scope" : "horizontal-line"
          }
        >
          _
        </span>
        <span
          className={
            scrollState === -1 ? "horizontal-line-scope" : "horizontal-line"
          }
        >
          _
        </span>
        <span
          className={
            scrollState === -2 ? "horizontal-line-scope" : "horizontal-line"
          }
        >
          _
        </span>
        <span
          className={
            scrollState === -3 ? "horizontal-line-scope" : "horizontal-line"
          }
        >
          _
        </span>
        <span
          className={
            scrollState === -4 ? "horizontal-line-scope" : "horizontal-line"
          }
        >
          _
        </span>
        <span
          className={
            scrollState === -5 ? "horizontal-line-scope" : "horizontal-line"
          }
        >
          _
        </span>
        <span
          className={
            scrollState === -6 ? "horizontal-line-scope" : "horizontal-line"
          }
        >
          _
        </span>
        <span
          className={
            scrollState === -7 ? "horizontal-line-scope" : "horizontal-line"
          }
        >
          _
        </span>
        <span
          className={
            scrollState === -8 ? "horizontal-line-scope" : "horizontal-line"
          }
        >
          _
        </span>
      </p>
    </footer>
  );
}
