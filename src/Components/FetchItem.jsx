import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemAction } from "../store/ItemSlice";
import { fetchStatusAction } from "../store/fetchStatusSlice";

const fetchItem = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchStatusAction.FetchingStart());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then((data) => {
        const items = data.Items[0];
        dispatch(fetchStatusAction.markFetchDone());
        dispatch(fetchStatusAction.FetchingFinished());
        dispatch(itemAction.addInitialItems(items));
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return <></>;
};

export default fetchItem;
