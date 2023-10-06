import { CustomArrowProps } from "react-slick";

export default function NextArrow(props: CustomArrowProps) {
  const { onClick, className, style, currentSlide } = props;

  return (
    <div
      onClick={onClick}
      className={`${
        className === "slick-dark" ? "slick-dark" : ""
      } slick-prev slick-arrow ${currentSlide === 0 ? " slick-disabled" : ""}`}
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      style={{ ...style }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="65.483"
        height="65.483"
        viewBox="0 0 65.483 65.483"
      >
        <g id="Right_arrow" transform="translate(3435.241 2978.741)">
          <g
            id="Ellipse_46"
            data-name="Ellipse 46"
            transform="translate(-3435.241 -2978.741)"
            fill="#fff"
            stroke="#22b0f0"
            strokeWidth="1"
          >
            <circle cx="32.741" cy="32.741" r="32.741" stroke="none"></circle>
            <circle cx="32.741" cy="32.741" r="32.241" fill="none"></circle>
          </g>
          <g id="right-arrow" transform="translate(-3411.931 -2962.054)">
            <g id="Group_1214" data-name="Group 1214">
              <path
                id="Path_303"
                data-name="Path 303"
                d="M119.83,14.8,105.541.513a1.76,1.76,0,0,0-2.484,0L102,1.565a1.759,1.759,0,0,0,0,2.484l12,12L101.991,28.06a1.761,1.761,0,0,0,0,2.484l1.052,1.052a1.76,1.76,0,0,0,2.484,0l14.3-14.3a1.773,1.773,0,0,0,0-2.493Z"
                transform="translate(-101.478)"
                fill="#22b0f0"
              ></path>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
