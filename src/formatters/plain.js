import _ from 'lodash';

const getType = (value) => {
	if (_.isPlainObject(value)) {
		return '[complex value]';
	};
	if (typeof value === 'string') {
		return `'${value}'`;
	}
	return `${value}`;
}

const getPlainFormat = (data) => {
	const iter = (data2, path = '') => {
		const filterData = data2.filter((item) => item.status !== 'unchanged');
		const mapData = filterData.map((child) => {
			const pathData = `${path}${child.key}`;
			switch(child.status) {
				case 'nested': return iter(child.children, `${pathData}.`);
				case 'added': return `Property '${pathData}' was added with value: ${getType(child.value)}`;
				case 'changed': return `Property '${pathData}' was updated. From ${getType(child.value1)} to ${getType(child.value2)}`;
				default: return `Property '${pathData}' was removed`;
			}
		})
	  return mapData.join('\n');
	}
	return iter(data);
};

export default getPlainFormat;