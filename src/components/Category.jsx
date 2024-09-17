
export default function CategoryDisplay({ category = 'JavaScript' }) {

    return (<div className='display category-display'>
        <span className='category-title'>{category}</span>
    </div>)
}