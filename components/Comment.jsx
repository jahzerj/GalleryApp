import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  margin: 10px auto;
  height: 100px;
  overflow: hidden;
`;

export default function CommentForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddEntry(data);
    event.target.reset();
  }

  return (
    <StyledContainer>
      <form className="entry-form" onSubmit={handleSubmit}>
        <div className="entry-form__field">
          <label htmlFor="notes">Comment</label>
          <textarea name="notes" id="notes" rows="2" />
        </div>
        <div className="entry-form__button-wrapper">
          <button type="submit">Send</button>
        </div>
      </form>
    </StyledContainer>
  );
}
