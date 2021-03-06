import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCategoryAct,
  editCategoryAct,
} from "../../store/dataState/dataActions";
import classes from "./CategoryLi.module.css";

const CategoryLi = ({ category }) => {
  const [editMode, setEditMode] = useState(false);
  const [titleInput, setTitleInput] = useState(category.title);
  const token = useSelector((state) => state.user.token);

  const dispatch = useDispatch();

  const onEditSubmit = (event) => {
    event.preventDefault();
    dispatch(editCategoryAct(token, category.id, { title: titleInput }));
    setEditMode(false);
  };

  const onDeleteRestoreSubmit = (event) => {
    if (category.isActive) {
      dispatch(deleteCategoryAct(token, category.id));
    } else {
      dispatch(editCategoryAct(token, category.id, { isActive: true }));
    }
  };
  return (
    <tr className={classes.row}>
      <td>{category.id}</td>
      <td>
        <div className={classes.title}>
          {editMode ? (
            <form className={classes.edit_form}>
              <input
                className={classes.title_input}
                type="text"
                value={titleInput}
                onChange={(e) => setTitleInput(e.target.value)}
              />
              <button onClick={onEditSubmit}>&#10004;</button>
              <button type="button" onClick={() => setEditMode(false)}>
                &#x2715;
              </button>
            </form>
          ) : (
            <span>{category.title}</span>
          )}
        </div>
      </td>
      <td>{new Date(category.created_at).toLocaleDateString("en-US")}</td>
      <td>{new Date(category.updated_at).toLocaleDateString("en-US")}</td>
      <td>
        <div className={classes.active}>{category.isActive ? "YES" : "NO"}</div>
      </td>
      <td className={classes.action}>
        <div className={classes.actions}>
          <span className={classes.edit} onClick={(e) => setEditMode(true)}>
            Edit
          </span>
          <span className={classes.delete} onClick={onDeleteRestoreSubmit}>
            {category.isActive ? "Delete" : "Restore"}
          </span>
        </div>
      </td>
    </tr>
  );
};

export default CategoryLi;
