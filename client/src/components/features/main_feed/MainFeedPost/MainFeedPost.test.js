const { render } = require("@testing-library/react");
const { default: userEvent } = require("@testing-library/user-event");
const { MainFeedPost } = require("./MainFeedPost");

jest.mock('../AddComment/AddComment', () => () => <p>AddComment</p>);
jest.mock('../Comments/Comments', () => () => <p>Comments</p>);

const post = {
  likes: ["test"],
  image: "https://i.redd.it/c52s8oyv1vp21.png",
  description: "test post"
}

describe("MainFeedPost test suite", () => {
  test("Smoke test", () => {
    render(<MainFeedPost post={post} />);
  });

  test("On image double click", () => {
    const mockToggleLike = jest.fn();
    const { getByTestId } = render(<MainFeedPost post={post} toggleLike={mockToggleLike} />);

    userEvent.dblClick(getByTestId("post-image"));
    expect(mockToggleLike).toBeCalled();
  });

  test("On like icon click", () => {
    const mockToggleLike = jest.fn();
    const { getByTestId } = render(<MainFeedPost post={post} username="test" toggleLike={mockToggleLike} />);

    userEvent.click(getByTestId("liked-icon"));
    expect(mockToggleLike).toBeCalled();
  });
});