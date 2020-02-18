import React from 'react';
import { useDispatch } from 'react-redux';
import { Pagination } from 'react-bootstrap';
import { fetchNext, fetchPrev } from '../../store/actions/pokemonsActions';

// eslint-disable-next-line react/prop-types
const PaginationBar = ({ previousLink, nextLink, page, setPage, count }) => {
  const dispatch = useDispatch();
  return (
    <Pagination>
      <Pagination.Item
        disabled={!previousLink}
        onClick={() => {
          setPage(page - 1);
          return previousLink && dispatch(fetchPrev(previousLink));
        }}
      >
        Prev
      </Pagination.Item>
      <Pagination.Item>{`Page ${page} of ${Math.ceil(
        count / 20,
      )}`}</Pagination.Item>
      <Pagination.Item
        disabled={!nextLink}
        onClick={() => {
          setPage(page + 1);
          return nextLink && dispatch(fetchNext(nextLink));
        }}
      >
        Next
      </Pagination.Item>
    </Pagination>
  );
};

export default PaginationBar;
