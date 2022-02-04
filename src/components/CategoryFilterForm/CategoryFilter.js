import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCategoriesAct } from "../../store/dataSlice/dataActions";
import classes from "./CategoryFilter.module.css";



const CategoryFilterForm = (props) => {
    let {sortCategories, setSortCategories, handleCategoryClick, resetButton} = props;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategoriesAct())
    }, [])
    const categories = useSelector(state => state.data.categories)
    //this line for trials
    //let categories = [{"title": "hoodies"},{"title": "t-shirt"},{"title": "baseball Tee"},{"title": "hoodies"},{"title": "elephant tusk"} ]
    function handleSubmit(e) {
        e.preventDefault();
        let formData = document.getElementsByClassName("CategoryOption");
        let formDataArray=[...formData]
        let categoriesToSort= [];
        console.log(formData[0]);
        formDataArray.forEach(element =>{
            if (element.checked)
                categoriesToSort.push(element.id)
        });
        setSortCategories({"categories": categoriesToSort});
        console.log(sortCategories);
    }
    return (
        <form className={classes.categoriesForm}>
            <div className={classes.typeLine}>
                <div className={classes.horizontalLine}></div>
                <p className={classes.textDescriptor}>Types</p>
                <div className={classes.horizontalLine}></div>
            </div>
                <div id="CategoryBox" className={classes.categoriesBox}>                    
                    {categories.map(category => {
                        return (
                            <div id={category.id}>
                                <input type="checkbox" id={category.id} className={classes.categoryOption}></input>
                                <label> {category.title}</label>
                            </div>
                        )
                    })}
                </div>
            <div className={classes.buttonContainer}>
                <div className={classes.button} onClick={handleSubmit} >apply</div><div className={classes.divider}></div> <div className={classes.button} onClick={resetButton}>reset</div>
            </div>
        </form>
    )

}

export default CategoryFilterForm;