import CategoryItem from '../category-item/category-item';
import './directory.scss';

const   Directory =({categories})=>{
    return(

    <div className='directory-container'>
        {categories.map((category,index)=> (
        <CategoryItem 
        key={category.id}
        imageUrl={category.imageUrl}
        title={category.title}
        
         /> 

        ))}

    </div>);
}

export default Directory;