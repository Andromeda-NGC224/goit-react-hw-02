export default function Options({clickFeedback}) {
    return (
        <>
            <button onClick={() => clickFeedback('good')}>Good</button>
            <button onClick={() => clickFeedback('neutral')}>Neutral</button>
            <button onClick={() => clickFeedback('bad')}>Bad</button>
    </>
   )
}
