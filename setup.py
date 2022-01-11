from setuptools import setup, find_packages

with open('requirements.txt') as f:
	install_requires = f.read().strip().split('\n')

# get version from __version__ variable in frappe_tinymce/__init__.py
from frappe_tinymce import __version__ as version

setup(
	name='frappe_tinymce',
	version=version,
	description='Frappe app to replace default text editor with tinyMCE',
	author='Shridhar Patil',
	author_email='shridharpatil2792@gmail.com',
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
