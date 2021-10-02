const { render } = require("@testing-library/react");
const { default: userEvent } = require("@testing-library/user-event");
const { default: LikeIcon } = require("./LikeIcon");

describe("LikeIcon test suite", () => {
  test("Smoke test", () => {
    render(<LikeIcon />);
  });

  test("Is liked test", () => {
    const mockOnClick = jest.fn();
    const { getByTestId } = render(<LikeIcon isLiked={true} onClick={mockOnClick} />);

    userEvent.click(getByTestId("liked-icon"));
    expect(mockOnClick).toBeCalled();
  });

  test("Is not liked test", () => {
    const mockOnClick = jest.fn();
    const { getByTestId } = render(<LikeIcon isLiked={false} onClick={mockOnClick} />);

    userEvent.click(getByTestId("not-liked-icon"));
    expect(mockOnClick).toBeCalled();
  });
});