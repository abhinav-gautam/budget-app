import React from 'react';
import { useSelector } from 'react-redux';
import EntryLine from './EntryLine';

const EntryLines = ({ setIsOpen }) => {
    const { entries } = useSelector(state => state.entries)
    return (
        <div>
            {
                entries.map(entry => (
                    <EntryLine
                        {...entry} key={entry.id}
                        setIsOpen={setIsOpen}
                    />
                ))
            }
        </div>

    );
}

export default EntryLines;
