const { render } = require("@testing-library/react");
const { MainFeed } = require("./MainFeed");

jest.mock('../MainFeedPost/MainFeedPost', () => () => <p>MainFeedPost</p>);
jest.mock('react-infinite-scroll-component', () => {
  const React = require('react');

  return React.memo(({children, next}) => {
    next();
    
    return <>
      <p>InfiniteScroll</p>
      {children}
    </>
  }, () => true)
});

describe("MainFeed test suite", () => {
  test("Smoke test", () => {
    render(<MainFeed posts={[]} loadPosts={jest.fn()} />);
  });

  test("Post generation test", () => {
    const { getAllByText } = render(<MainFeed posts={(new Array(50)).fill(0)} loadPosts={jest.fn()} />);

    expect(getAllByText("InfiniteScroll").length).toBe(1);
    expect(getAllByText("MainFeedPost").length).toBe(50);
  });

  test("Load posts call test", () => {
    const mockLoadPosts = jest.fn();
    render(<MainFeed posts={(new Array(50)).fill(0)} loadPosts={mockLoadPosts} />);

    expect(mockLoadPosts).toBeCalled();
  });
});