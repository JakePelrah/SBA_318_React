
export default function Category({ category = 'JavaScript' }) {

    return (<div className='display category'>
        <span className='category-title'>{category}</span>
    </div>)
}