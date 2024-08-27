import "./back-to-top-button.scss";
import { useDispatch, useSelector } from "react-redux";
import { scrollToTop } from "../../selectors";
import { useEffect } from "react";
import { setScrollToTopButton } from "../../actions/displayOptions";
import { FaAngleDoubleUp } from "react-icons/fa";

const BackToTopButton = () => {
  const dispatch = useDispatch();
  const { scrollToTopButton } = useSelector((state) => state.displayOptions);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        dispatch(setScrollToTopButton(true));
      } else {
        dispatch(setScrollToTopButton(false));
      }
    });
  }, [window]);

  return (
    <div
      onClick={() => scrollToTop()}
      className={scrollToTopButton ? "scroll" : "scroll scroll--reverse"}
    >
      <div
        className={scrollToTopButton ? "scroll__to-top" : "scroll__to-bottom"}
      >
        <FaAngleDoubleUp />
      </div>
    </div>
  );
};

export default BackToTopButton;
