import { useEffect, useState } from 'react';

const usePackages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch("https://travel-agency-server-seven.vercel.app/package")
            .then((res) => res.json())
            .then((data) => setPackages(data));
    }, []);
    
    return { packages };

};

export default usePackages;