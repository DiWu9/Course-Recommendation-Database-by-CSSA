import pandas as pd

faculty_staff_directory = pd.read_csv("/Users/allen/Downloads/union-college-directory-2020-12.csv")
faculty_staff_count = len(faculty_staff_directory)
directory_by_title = faculty_staff_directory["Title"]
directory_by_name = faculty_staff_directory["Full Name"]
directory_by_dept = faculty_staff_directory["Department"]
professor_directory = {"Full Name": [], "Title": [], "Department": []}
professor_names, professor_titles, professor_depts = [], [], []
for index in range(faculty_staff_count):
    professor_title = str(directory_by_title[index])
    if professor_title.find("Professor") != -1:
        professor_names.append(str(directory_by_name[index]))
        professor_titles.append(professor_title)
        professor_depts.append(str(directory_by_dept[index]))
professor_directory["Full Name"] = professor_names
professor_directory["Title"] = professor_titles
professor_directory["Department"] = professor_depts
truncated_directory = pd.DataFrame.from_dict(professor_directory)
truncated_directory.to_csv("/Users/allen/Downloads/union-college-professor_directory-2020-12.csv")
