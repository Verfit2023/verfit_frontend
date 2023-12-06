function LineBreak(props: { text: string }) {
    const textArray = props.text.split('\n');
    return textArray.map((line, index) => (
      <p>
        {line}
        {index !== textArray.length - 1 && <br />}
      </p>
    ));
  }
  
export default LineBreak;