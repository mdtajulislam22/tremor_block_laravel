import { useState } from 'react';

import {
    RiGithubFill,
    RiGoogleFill,
    RiRedditFill,
    RiTwitterFill,
    RiYoutubeFill,
} from '@remixicon/react';
import {
    AreaChart,
    BarList,
    Card,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
} from '@tremor/react';

const data = [
    {
        date: 'Aug 01',
        'Page views': 7100,
    },
    {
        date: 'Aug 02',
        'Page views': 10943,
    },
    {
        date: 'Aug 03',
        'Page views': 10889,
    },
    {
        date: 'Aug 04',
        'Page views': 10909,
    },
    {
        date: 'Aug 05',
        'Page views': 10778,
    },
    {
        date: 'Aug 06',
        'Page views': 10900,
    },
    {
        date: 'Aug 07',
        'Page views': 10129,
    },

];

const data1 = [
    {
        name: '/',
        value: 20874,
    },
    {
        name: '/components',
        value: 19188,
    },
    {
        name: '/docs/getting-started/installation',
        value: 17922,
    },
    {
        name: '/docs/visualizations/area-chart',
        value: 10067,
    },
    {
        name: '/docs/visualizations/bar-chart',
        value: 9067,
    },
];

const data2 = [
    {
        name: 'google.com',
        value: 9882,
        icon: RiGoogleFill,
    },
    {
        name: 'twitter.com',
        value: 1904,
        icon: RiTwitterFill,
    },
    {
        name: 'github.com',
        value: 1904,
        icon: RiGithubFill,
    },
    {
        name: 'youtube.com',
        value: 1118,
        icon: RiYoutubeFill,
    },
    {
        name: 'reddit.com',
        value: 396,
        icon: RiRedditFill,
    },
];

const valueFormatter = (number) =>
    `${Intl.NumberFormat('us').format(number).toString()}`;

export default function Tremor() {

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className='w-9/12'>
                <h3 className="text-tremor-title font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                    Web analytics
                </h3>
                <p className="mt-1 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                    Analyze and understand your web traffic.
                </p>
                <Card className="mt-8 overflow-hidden p-6">
                    <AreaChart
                        data={data}
                        index="date"
                        categories={['Page views']}
                        valueFormatter={valueFormatter}
                        showGradient={false}
                        showLegend={false}
                        yAxisWidth={45}
                        className="hidden h-96 sm:block"
                    />
                    <AreaChart
                        data={data}
                        index="date"
                        categories={['Page views']}
                        valueFormatter={valueFormatter}
                        showGradient={false}
                        showLegend={false}
                        showYAxis={false}
                        startEndOnly={true}
                        className="h-72 sm:hidden"
                    />
                </Card>
                <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <Card>
                        <div className="flex items-center justify-between">
                            <p className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                                Top pages
                            </p>
                        </div>
                        <BarList
                            data={data1}
                            valueFormatter={valueFormatter}
                            className="mt-4"
                        />
                    </Card>
                    <Card>
                        <div className="flex items-center justify-between">
                            <p className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                                Top sources
                            </p>
                        </div>
                        <BarList
                            data={data2}
                            valueFormatter={valueFormatter}
                            className="mt-4"
                        />
                    </Card>
                </div>
            </div>
        </div>
    );

}
