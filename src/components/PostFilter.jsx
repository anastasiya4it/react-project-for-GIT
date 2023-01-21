import React from 'react';
import MySelect from './UI/select/MySelect';
import MyInput from './UI/input/MyInput';

const PostFilter = ({ filter, setFilter }) => {

    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={event => setFilter({ ...filter, query: event.target.value })}
                placeholder='Поиск...'></MyInput>
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
                defaultValue='Сортировка'
                options={[
                    { value: 'title', name: 'По названию' },
                    { value: 'body', name: 'По значению' }
                ]}
            ></MySelect>
        </div >
    );
};

export default PostFilter;