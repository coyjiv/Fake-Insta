const { render } = require("@testing-library/react");
const { default: userEvent } = require("@testing-library/user-event");
const { default: Comments } = require("./Comments");

const comments = Array.from({length: 20}, (_, index) => ({message: index}));

describe("Comments test suite", () => {
  test("Smoke test", () => {
    render(<Comments comments={[]} />);
  });

  test("Initially shown comments", () => {
    const { getAllByTestId } = render(<Comments comments={comments} />);
    expect(getAllByTestId("comment").length).toBe(1);
  });

  test("Shown comments on \"Show more\" click", () => {
    const { getAllByTestId, getByTestId } = render(<Comments comments={comments} />);

    userEvent.click(getByTestId("comment-toggler"));

    expect(getAllByTestId("comment").length).toBe(20);
  });
});