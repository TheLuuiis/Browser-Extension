import '../css/main.css';
import { useMemo, useState } from 'react';
import Card from './Card';
import extensions from '../data/extensions';

const FILTER_ALL = 'All';
const FILTER_ACTIVE = 'Active';
const FILTER_INACTIVE = 'Inactive';

const Main = () => {
  const [selectedFilter, setSelectedFilter] = useState(FILTER_ALL);

  const [extensionsList, setExtensionsList] = useState(() =>
    extensions.map((extension) => ({
      ...extension,
      isActive: true,
    }))
  );

  const visibleExtensions = useMemo(() => {
    if (selectedFilter === FILTER_ACTIVE) {
      return extensionsList.filter((extension) => extension.isActive);
    }
    if (selectedFilter === FILTER_INACTIVE) {
      return extensionsList.filter((extension) => !extension.isActive);
    }
    return extensionsList; // All
  }, [extensionsList, selectedFilter]);

    const handleRemoveExtension = (extensionId) => {
        setExtensionsList((currentList) =>
            currentList.filter((extension) => extension.id !== extensionId)
        );
    };

    const handleToggleExtensionActive = (extensionId) => {
        setExtensionsList((currentList) =>
            currentList.map((extension) =>
                extension.id === extensionId
                ? { ...extension, isActive: !extension.isActive }
                : extension
            )
        );
    };

    const filterOptions = [FILTER_ALL, FILTER_ACTIVE, FILTER_INACTIVE];

    return (
        <main className="main">
            <div className="container-options">
                <h1>Extensions List</h1>

                <div className="options">
                    {filterOptions.map((filterName) => (
                        <button
                            key={filterName}
                            type="button"
                            className={selectedFilter === filterName ? 'filter-selected' : ''}
                            aria-pressed={selectedFilter === filterName}
                            onClick={() => setSelectedFilter(filterName)}
                            >
                            {filterName}
                        </button>
                    ))}
                </div>
            </div>
            <div className="container-cards">
                {visibleExtensions.map((extension) => (
                    <Card
                        key={extension.id}
                        id={extension.id}
                        name={extension.name}
                        description={extension.description}
                        image={extension.image}
                        isActive={extension.isActive}
                        onRemove={handleRemoveExtension}
                        onToggleActive={handleToggleExtensionActive}
                    />
                ))}
            </div>
        </main>
    );
};

export default Main;