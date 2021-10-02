const { fireEvent } = require("@testing-library/dom");
const { render } = require("@testing-library/react");
const { default: userEvent } = require("@testing-library/user-event");
const { AddComment } = require("./AddComment");


describe("AddComment test suite", () => {
  test("Smoke test", () => {
    render(<AddComment saveComment={jest.fn()} />);
  });

  describe("On submit button click", () => {
    test("Met submit conditions", () => {
      const mockSaveComment = jest.fn();
      const { getByTestId } = render(<AddComment saveComment={mockSaveComment} />);
  
      userEvent.type(getByTestId("add-comment-textarea"), "test comment");
      userEvent.click(getByTestId("add-comment-button"));

      expect(mockSaveComment).toBeCalled();
    });

    test("No text provided", () => {
      const mockSaveComment = jest.fn();
      const { getByTestId } = render(<AddComment saveComment={mockSaveComment} />);
  
      userEvent.click(getByTestId("add-comment-button"));
      expect(mockSaveComment).not.toBeCalled();

      userEvent.type(getByTestId("add-comment-textarea"), "      \n      \n    ");
      userEvent.click(getByTestId("add-comment-button"));
      expect(mockSaveComment).not.toBeCalled();
    });
  });

  describe("On enter click", () => {
    test("Met submit conditions", () => {
      const mockSaveComment = jest.fn();
      const { getByTestId } = render(<AddComment saveComment={mockSaveComment} />);
  
      const textArea = getByTestId("add-comment-textarea");
      userEvent.type(textArea, "test comment");
      fireEvent.keyPress(textArea, { key: "Enter", keyCode: 13, code: "Enter", charCode: 13 });

      expect(mockSaveComment).toBeCalled();
    });

    test("No text provided", () => {
      const mockSaveComment = jest.fn();
      const { getByTestId } = render(<AddComment saveComment={mockSaveComment} />);
  
      const textArea = getByTestId("add-comment-textarea");
      fireEvent.keyPress(textArea, { key: "Enter", keyCode: 13, code: "Enter", charCode: 13 });
      expect(mockSaveComment).not.toBeCalled();

      userEvent.type(textArea, "      \n      \n    ");
      fireEvent.keyPress(textArea, { key: "Enter", keyCode: 13, code: "Enter", charCode: 13 });
      expect(mockSaveComment).not.toBeCalled();
    });

    test("Shift key specified", () => {
      const mockSaveComment = jest.fn();
      const { getByTestId } = render(<AddComment saveComment={mockSaveComment} />);
  
      const textArea = getByTestId("add-comment-textarea");
      userEvent.type(textArea, "test comment");
      fireEvent.keyPress(textArea, { key: "Enter", keyCode: 13, code: "Enter", charCode: 13, shiftKey: true });
      expect(mockSaveComment).not.toBeCalled();
    });
  });
})