import React, {useState, useEffect} from 'react'

const logs = () => {
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getLogs();
        // eslint-disable-next-line
    },[]);
    const getLogs = async () => {
        setLoading(true);
        const res = await fetch('/logs');
        const data = res.json();
        setLogs(data);
        setLoading(false);
    }
    if(loading){
        return <h4>
            Loading...
        </h4>
    }
    return (
        <ul className='collection-with-header'>
            <li className='collection-header'>
                <h4 className='center'>System Logs</h4>
            </li>
             {!loading && logs.length === 0 ? (<p className='center'>No logs to show...</p>)}
        </ul>
    )
}

export default logs
