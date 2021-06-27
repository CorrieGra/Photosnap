import './pricing.css';
import PriceCard from '../../components/core/price-card/price-card';
import Card from '../../components/core/card/card';
import Select from '../../components/core/select/select';
import BetaFooter from '../../components/core/beta-foot/beta-foot';
import ComparisonTable from '../../components/core/comparison-table/comparison-table';
import { useState } from 'react';
import { isMobile } from 'react-device-detect';

const priceList = [
    {
        title: 'basic',
        description: 'Includes basic usage of our platform. Recommended for new and aspiring photographers.',
        subscriptions: {
            monthly: 19,
            yearly: 190
        }
    },
    {
        title: 'pro',
        description: 'More advanced features available. Recommended for photography veterans and professionals.',
        subscriptions: {
            monthly: 39,
            yearly: 390
        }
    },
    {
        title: 'business',
        description: 'Additional features available such as more detailed metrics. Recommended for business owners.',
        subscriptions: {
            monthly: 99,
            yearly: 990
        }
    },
];

const comparisonTableData = [
    {
        unlimited_story_posting: ['basic', 'pro', 'business']
    },
    {
        unlimited_photo_upload: ['basic', 'pro', 'business']
    },
    {
        embedding_custom_content: [null, 'pro', 'business']
    },
    {
        custom_metadata: [null, 'pro', 'business']
    },
    {
        advanced_metrics: [null, null, 'business']
    },
    {
        photo_downloads: [null, null, 'business']
    },
    {
        search_engine_indexing: [null, null, 'business']
    },
    {
        custom_analytics: [null, null, 'business']
    }
];

export default function PricingPage() {
    const [selectValue, setSelectValue] = useState('');

    const valueHasChanged = (response) => setSelectValue(response);

    return (
        <div className="pricing__page">
            <Card index="5" title="pricing" subTitle="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos." hasButton={ false }/>
            <div className="pricing__cards--container">
                <Select firstOption="monthly" secondOption="yearly" callback={ valueHasChanged } />
                <div className="pricing__cards">
                    { priceList.map((price, index) => (<PriceCard key={ index + 1 } title={ price.title } description={ price.description } price={ price.subscriptions[selectValue] } subscriptionType={ selectValue === 'monthly' ? 'month' : 'year' } theme={ index + 1 === 2 ? 'light' : 'dark' } />)) }
                </div>
            </div>
            {
                isMobile ? <ComparisonTable title="compare" headers={[ 'the features', 'basic', 'pro', 'business' ]} rowData={ comparisonTableData } /> : <ComparisonTable title="compare" headers={[ 'the features', 'basic', 'pro', 'business' ]} rowData={ comparisonTableData } />
            }
            <BetaFooter />
        </div>
    );
}